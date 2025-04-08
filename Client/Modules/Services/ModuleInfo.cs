using Oqtane.Models;
using Oqtane.Modules;

namespace codeXpert.Module.AdminLTE.Services
{
    public class ModuleInfo : IModule
    {
        public ModuleDefinition ModuleDefinition => new ModuleDefinition
        {
            Name = "AdminLTE Theme - Services",
            Description = "Add a Services section to your AdminLTE Theme",
            Version = "6.0.1",
            PackageName = "codeXpert.Theme.AdminLTE"
        };
    }
}
