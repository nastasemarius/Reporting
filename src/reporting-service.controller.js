import ReportingServiceModel from './reporting-service.model';

export class ReportingServiceController {
    constructor() {
    }

    instantiate(app) {
        app.get('/getreport', (req, res) => {
           ReportingServiceModel.GetAllReports(req, res)
        });

        app.get('/getcsv', (req, res) => {
            res.send(ReportingServiceModel.GetCSV(req, res));
        });
    }
}