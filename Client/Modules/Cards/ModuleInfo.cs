using Oqtane.Models;
using Oqtane.Modules;

namespace codeXpert.Module.AdminLTE.Cards
{
    public class ModuleInfo : IModule
    {
        public ModuleDefinition ModuleDefinition => new ModuleDefinition
        {
            Name = "AdminLTE Theme - Cards",
            Description = "Add Cards section to your AdminLTE Theme",
            Version = "6.0.1",
            PackageName = "codeXpert.Theme.AdminLTE"
        };
    }
}
