

import { Entity, PrimaryColumn, Column, BaseEntity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({default:true})
    name !:string ;
    
    @Column({default:true})
    email!:string;
   
}