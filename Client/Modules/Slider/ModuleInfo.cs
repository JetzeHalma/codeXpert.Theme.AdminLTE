using Oqtane.Models;
using Oqtane.Modules;

namespace codeXpert.Module.AdminLTE.Slider
{
    public class ModuleInfo : IModule
    {
        public ModuleDefinition ModuleDefinition => new ModuleDefinition
        {
            Name = "AdminLTE Theme - Slider",
            Description = "Add a Slider to your AdminLTE Theme",
            Version = "6.0.1",
            PackageName = "codeXpert.Theme.AdminLTE"
        };
    }
}
