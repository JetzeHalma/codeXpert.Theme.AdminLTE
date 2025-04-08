using Oqtane.Models;
using Oqtane.Modules;

namespace codeXpert.Module.AdminLTE.Tables
{
    public class ModuleInfo : IModule
    {
        public ModuleDefinition ModuleDefinition => new ModuleDefinition
        {
            Name = "AdminLTE Theme - Tables",
            Description = "Add a Tables section to your AdminLTE Theme",
            Version = "6.0.1",
            PackageName = "codeXpert.Theme.AdminLTE"
        };
    }
}
