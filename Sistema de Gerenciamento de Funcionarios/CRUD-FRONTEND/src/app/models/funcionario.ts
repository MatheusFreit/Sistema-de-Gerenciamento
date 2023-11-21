export interface Funcionario{
    id?:number,
    name: string,
    sobrenome: string,
    departamento: string,
    ativo: boolean,
    turno: string,
    datadeCriacao?: string,
    datadeAlteracao?: string,
}