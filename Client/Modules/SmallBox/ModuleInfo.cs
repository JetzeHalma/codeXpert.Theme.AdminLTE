using Oqtane.Models;
using Oqtane.Modules;

namespace codeXpert.Module.AdminLTE.SmallBox
{
    public class ModuleInfo : IModule
    {
        public ModuleDefinition ModuleDefinition => new ModuleDefinition
        {
            Name = "AdminLTE Theme - SmallBox",
            Description = "Add a SmallBox section to your AdminLTE Theme",
            Version = "6.0.1",
            PackageName = "codeXpert.Theme.AdminLTE"
        };
    }
}
