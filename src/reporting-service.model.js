class ReportingServiceModel {
    GetReport(req,res){
        return {
            data: [
                {
                    _id: "#1",
                    name:"data point #1",
                    value: 100.5
                }
            ]
        }
    }
}

export default new ReportingServiceModel();