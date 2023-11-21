using System.Text.Json.Serialization;

namespace CRUD_BACKEND.Enum
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DepartamentosEnum
    {
        RH,
        FINANCEIRO,
        COMPRAS,
        ATENDIMENTO,
        ZELADORIA
    }
}
