using Oqtane.Models;
using Oqtane.Modules;

namespace codeXpert.Module.AdminLTE.FAQs
{
    public class ModuleInfo : IModule
    {
        public ModuleDefinition ModuleDefinition => new ModuleDefinition
        {
            Name = "AdminLTE Theme - FAQs",
            Description = "Add a FAQs section to your AdminLTE Theme",
            Version = "6.0.1",
            PackageName = "codeXpert.Theme.AdminLTE"
        };
    }
}
