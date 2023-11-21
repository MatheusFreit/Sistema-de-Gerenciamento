using System.Text.Json.Serialization;

namespace CRUD_BACKEND.Enuns
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum TurnosEnum
    {
        Manhã,
        Tarde,
        Noite
    }
}
