using CRUD_BACKEND.Enum;
using CRUD_BACKEND.Enuns;
using System.ComponentModel.DataAnnotations;

namespace CRUD_BACKEND.Models
{
    public class FuncionarioModel
    {
        [Key]
        public int Id {  get; set; }
        public string Name { get; set; }
        public string Sobrenome { get; set;}
        public DepartamentosEnum Departamento { get; set;}
        public bool Ativo { get; set;} = false;
        public TurnosEnum Turno { get; set;}
        public DateTime DatadeCriacao { get; set;} = DateTime.Now.ToLocalTime();

        public DateTime DatadeAlteracao { get; set; } = DateTime.Now.ToLocalTime();
    }
}
