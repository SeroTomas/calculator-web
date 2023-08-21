import { Subject } from 'rxjs';


class SubjectGenerator {

    private Subject = new Subject();

    getSubject() {

        return this.Subject.asObservable();
    }

    setSubject(value
        ) {

        return this.Subject.next(value);
    }
}

export default SubjectGenerator;