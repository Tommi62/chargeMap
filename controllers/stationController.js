// Controller
'use strict';
import station from '../models/stationModel';

const station_list_get = async (req, res) => {
  res.json(await station.find());
};

const station_get = async (req, res) => {
  const stationId = req.params.id;
  res.json(await station.findById(stationId));
};

const station_post = async (req, res) => {
  const newStation = req.body;
  try {
    await station.create(newStation);
    res.json(newStation);
  } catch (error) {
    console.log(error.message);
    res.json();
  }
};

const station_put = async (req, res) => {
  const { name, weight, color } = req.body;
  const { id } = req.params;
  try {
    const mod = await station.updateOne({ _id: id }, { name, weight, color });
    res.status(200).send(`Updated sucessfully ${mod.modifiedCount} station`);
  } catch (error) {
    console.log(error.message);
    res.json();
  }
};

const station_delete = async (req, res) => {
  const { id } = req.params;
  try {
    const del = await station.deleteOne({ _id: id });
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
  station_put,
  station_delete,
};
