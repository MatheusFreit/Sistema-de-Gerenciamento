using CRUD_BACKEND.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUD_BACKEND.DataContext
{
    public class AplicationDbContext : DbContext
    {

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options ) : base ( options ) 
        {

            
        }
        public DbSet<FuncionarioModel> Funcionarios { get; set; }

    }
}
