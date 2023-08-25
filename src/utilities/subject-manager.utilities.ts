import { Subject } from 'rxjs';

export interface SubjectInfo {
    value:string
    type:string
}

class SubjectGenerator {

    private Subject = new Subject<SubjectInfo>;

    getSubject() {
        return this.Subject.asObservable();
    }

    setSubject (value:SubjectInfo) {
        this.Subject.next(value);
    }
}

export default SubjectGenerator;