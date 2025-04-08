using Oqtane.Models;
using Oqtane.Modules;

namespace codeXpert.Module.AdminLTE.InfoBox
{
    public class ModuleInfo : IModule
    {
        public ModuleDefinition ModuleDefinition => new ModuleDefinition
        {
            Name = "AdminLTE Theme - InfoBox",
            Description = "Add a InfoBox section to your AdminLTE Theme",
            Version = "6.0.1",
            PackageName = "codeXpert.Theme.AdminLTE"
        };
    }
}
