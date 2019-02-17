import ReportingServiceModel from './reporting-service.model';

export class ReportingServiceController {
    constructor() {
    }

    instantiate(app) {
        app.get('/getreports', (req, res) => {
            ReportingServiceModel.GetAllReports(req, res)
        });

        app.get('/addreport', (req, res) => {
            ReportingServiceModel.AddReport(req,res);
        });

        app.get('/getcsv', (req, res) => {
            res.send(ReportingServiceModel.GetCSV(req, res));
        });
    }
}