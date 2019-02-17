import mongoose from 'mongoose';

class ReportingServiceModel {
    constructor() {
        this.reportSchema = mongoose.Schema({
            name: String,
            value: Number
        });
        this.Report = mongoose.model('Report', this.reportSchema);
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

    AddReport(req, res) {
        const report = new this.Report(req.body || { name: 'DailyReport', value: 105 });
        report.save()
            .then(() => {
                res.send({ message: `${report.name} added!` })
            })
            .catch(err => {
                res.send({ error: err })
            });
    }
}

export default new ReportingServiceModel();