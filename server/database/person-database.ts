import {Database, PathListEntry} from "./database";

export class PersonDatabase extends Database {

    protected createTestData() {
        this.create({firstName:'Adam', familyName: 'Jones'});
        this.create({firstName:'Betty', familyName: 'Miller'});
        this.create({firstName:'Chris', familyName: 'Connor'});
        this.create({firstName:'Dave', familyName: 'Dean'});
    }

    protected getEntityName() {
        return "person";
    }

    protected getSort() : any[] {
        return ['familyName', 'firstName'];
    }

    protected createPathListEntry(entry:PathListEntry, entity:any) : Promise<PathListEntry> {
        entry.name = entity.firstName + ' ' + entity.familyName;
        if (entity.company != null) {
            return Database._database.get(entity.company).then((doc) => {
                entry.details.push(doc.name);
                return entry;
            })
        } else {
            return super.createPathListEntry(entry, entity);
        }
    }

}