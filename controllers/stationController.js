// Controller
'use strict';
import Station from '../models/stationModel';

const station_list_get = async (req, res) => {
  const query = req.query;
  let stationLimit = 10;

  if (query.hasOwnProperty('limit')){
    query['limit'] = parseInt(query.limit);
    stationLimit = query.limit;
  }
  res.json(await Station.find().populate('Connections').limit(stationLimit));
};

const station_get = async (req, res) => {
  const stationId = req.params.id;
  res.json(await Station.findById(stationId));
};

const station_post = async (req, res) => {
  console.log('Req', req.body);
  const newStation = req.body;
  try {
    await Station.create(newStation);
    res.json(newStation);
  } catch (error) {
    console.log(error.message);
    res.json();
  }
};

const station_delete = async (req, res) => {
  const { id } = req.params;
  try {
    const del = await Station.deleteOne({ _id: id });
    res.send(`Deleted ${del.deletedCount} station`);

  } catch (error) {
    console.log(error.message);
    res.json();
  }
};

export {
  station_list_get,
  station_get,
  station_post,
  station_delete,
};

