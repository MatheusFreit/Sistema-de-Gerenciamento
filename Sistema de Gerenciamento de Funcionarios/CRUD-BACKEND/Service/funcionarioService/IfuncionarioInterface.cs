using CRUD_BACKEND.Models;

namespace CRUD_BACKEND.Service.funcionarioService
{
    public interface IfuncionarioInterface
    {
        Task<ServiceResponse<List<FuncionarioModel>>> GetFuncionario();
        Task<ServiceResponse<List<FuncionarioModel>>> CreateFuncioario(FuncionarioModel novoFuncionario);
        Task<ServiceResponse<FuncionarioModel>> GetFuncionarioById(int id);
        Task<ServiceResponse<List<FuncionarioModel>>> UpdateFuncionario(FuncionarioModel editadoFuncionario);
        Task<ServiceResponse<List<FuncionarioModel>>> DeleteFuncionario(int id);
        Task<ServiceResponse<List<FuncionarioModel>>> InativaFuncionario(int id);
    }
}
