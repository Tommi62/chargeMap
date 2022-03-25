'use strict';
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const stationSchema = new Schema({
  _id: Schema.Types.ObjectId,
  Title: String,
  Town: String,
  AddressLine1: String,
  StateOrProvince: String,
  Postcode: String,
  Location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
});


export default mongoose.model('station', stationSchema);
