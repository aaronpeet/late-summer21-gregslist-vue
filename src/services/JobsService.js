import { sandbox } from "./AxiosService"
import { AppState } from "../AppState"

class JobsService{

    async getAllJobs() {
        let res = await sandbox.get("/jobs")
        AppState.jobs = res.data
    }
}

export const jobsService = new JobsService()