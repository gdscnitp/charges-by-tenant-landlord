const mongoose = require("mongoose");

const { isEmail, isDate } = require("validator");

const historySchema = new mongoose.Schema(
  {
    tenant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
    },
    site_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sites",
      required: true,
    },
    status: {
      type: String,
      default: "0",
    },

    requested_at: {
      type: Date,
    },
    joined_at: {
      type: Date,
    },
    left_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

historySchema.pre('save', (next) => {
    var tenantId = this.tenant_id;
    var siteId = this.site_id;

    if(tenantId && siteId){
      if(this.status<2){
        return Promise.reject('New document cannot be created');
      }
      else{
        return next();
      }
    }
})

module.exports = mongoose.models.History || mongoose.model("History", historySchema);
