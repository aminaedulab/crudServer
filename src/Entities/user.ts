import { Entity, PrimaryColumn, Column, BaseEntity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class user extends BaseEntity{
    static password(password: any, password1: any) {
        throw new Error('Method not implemented.');
    }
    static id: any;
    static push(arg0: { email: any; password: string; }) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({default:true})
    name !:string ;
    
    @Column({default:true})
    decription!:string;

    @Column({default:true})
    status!:boolean;

}