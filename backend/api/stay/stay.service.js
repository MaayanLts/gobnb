const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')
const fs = require('fs')

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('stay')
        const stays = await collection.find(criteria).toArray()
        // var stays = await collection.aggregate([
        //     {
        //         $match: criteria
        //     },
        //     {
        //         $lookup:
        //         {
        //             localField: 'byUserId',
        //             from: 'user',
        //             foreignField: '_id',
        //             as: 'byUser'
        //         }
        //     },
        //     {
        //         $unwind: '$byUser'
        //     },
        //     {
        //         $lookup:
        //         {
        //             localField: 'aboutUserId',
        //             from: 'user',
        //             foreignField: '_id',
        //             as: 'aboutUser'
        //         }
        //     },
        //     {
        //         $unwind: '$aboutUser'
        //     }
        // ]).toArray()
        // stays = stays.map(stay => {
        //     stay.byUser = { _id: stay.byUser._id, fullname: stay.byUser.fullname }
        //     stay.aboutUser = { _id: stay.aboutUser._id, fullname: stay.aboutUser.fullname }
        //     delete stay.byUserId
        //     delete stay.aboutUserId
        //     return stay
        // })
        return stays
    } catch (err) {
        logger.error('cannot find stays', err)
        throw err
    }

}

async function remove(stayId) {
    try {
        // const store = asyncLocalStorage.getStore()
        // const { loggedinUser } = store
        const collection = await dbService.getCollection('stay')
        // remove only if user is owner/admin
        const criteria = { _id: ObjectId(stayId) }                    
        // if (!loggedinUser.isAdmin) criteria.byUserId = ObjectId(loggedinUser._id)
        const { deletedCount } = await collection.deleteOne(criteria)
        console.log('dbug: stayId.ser:', deletedCount )
        return deletedCount
    } catch (err) {
        logger.error(`cannot remove stay ${stayId}`, err)
        throw err
    }
}


async function add(stay) {
    try {
        const collection = await dbService.getCollection('stay')
        const addedStay = await collection.insertOne(stay)
        return stay
    } catch (err) {
        logger.error('cannot insert stay', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.byUserId) criteria.byUserId = filterBy.byUserId
    return criteria
}

async function getById(stayId) {
    try {
        const collection = await dbService.getCollection('stay')
        const stay = collection.findOne({ _id: ObjectId(stayId) })
        return stay
    } catch (err) {
        logger.error(`while finding stay ${stayId}`, err)
        throw err
    }
}

async function update(stay) {
    try {
        var id = ObjectId(stay._id)
        delete stay._id
        const collection = await dbService.getCollection('stay')
        await collection.updateOne({ _id: id }, { $set: { ...stay } })
        stay._id = id
        return stay
    } catch (err) {
        logger.error(`cannot update stay ${stayId}`, err)
        throw err
    }
}

module.exports = {
    query,
    remove,
    add,
    update,
    getById
}

// _saveStays()
async function _saveStays(){
    const stays = require('../../services/stay.json')

    try {
        console.log(1, stays[188])
        const collection = await dbService.getCollection('stay')
        stays.forEach((stay) => {
             stay._id = ObjectId(stay._id )   
             add(stay)
        });
        
    } catch (err) {
        logger.error('cannot insert stays', err)
        throw err
    }

}

