import ReportingServiceModel from './reporting-service.model';

class ReportingServiceController {
    constructor(app) {
        instantiate(app);
    }

    instantiate(app) {
        app.get('/getreport', (req, res) => {
            res.send(ReportingServiceModel.GetReport(req, res));
        });

        app.get('/getcsv', (req, res) => {
            res.send(ReportingServiceModel.GetCSV(req, res));
        });
    }
}