using Microsoft.JSInterop;
using System.Threading.Tasks;
using System.Runtime.Versioning;

namespace codeXpert.Theme.AdminLTE.Client.Themes
{
    [SupportedOSPlatform("browser")]
    public class JSInterop
    {
        private readonly IJSRuntime _jsRuntime;
        private IJSObjectReference module;

        public JSInterop(IJSRuntime jsRuntime)
        {
            _jsRuntime = jsRuntime;
        }

        public async Task Load()
        {
            try
            {
                // Load main js functions
                await _jsRuntime.InvokeVoidAsync("Oqtane.Theme.load");
            }
            catch
            {
                // handle exception
            }
        }

        public Task IncludeLink(string id, string rel, string href, string type, string integrity, string crossorigin, string includebefore)
        {
            try
            {
                _jsRuntime.InvokeVoidAsync(
                    "Oqtane.Interop.includeLink", id, rel, href, type, integrity, crossorigin, includebefore);
                return Task.CompletedTask;
            }
            catch
            {
                return Task.CompletedTask;
            }
        }

        public Task RemoveLink(string prefix)
        {
            try
            {
                _jsRuntime.InvokeVoidAsync( "Oqtane.Interop.removeElementsById", prefix, "", "");
                return Task.CompletedTask;
            }
            catch
            {
                return Task.CompletedTask;
            }
        }
    }
}
