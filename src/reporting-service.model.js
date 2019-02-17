import mongoose from 'mongoose';

class ReportingServiceModel {
    constructor(){
        this.reportSchema = mongoose.Schema({
            name: String,
            value: Number
        });
        this.Report = mongoose.Model('Report',this.reportSchema);
    }

    GetAllReports(req, res) {
        this.Report.find()
            .then(reports => {
                res.send(reports);
            })
            .catch(err => {
                res.send({ error: err })
            });
    }
}

export default new ReportingServiceModel();