using System.Collections.Generic;
using Oqtane.Models;
using Oqtane.Themes;
using Oqtane.Shared;

namespace codeXpert.Theme.AdminLTE
{
    public class ThemeInfo : ITheme
    {
        public Oqtane.Models.Theme Theme => new Oqtane.Models.Theme
        {
            Name = "codeXpert AdminLTE",
            Version = "1.0.0",
            PackageName = "codeXpert.Theme.AdminLTE",
            ThemeSettingsType = "codeXpert.Theme.AdminLTE.ThemeSettings, codeXpert.Theme.AdminLTE.Client.Oqtane",
            ContainerSettingsType = "codeXpert.Theme.AdminLTE.ContainerSettings, codeXpert.Theme.AdminLTE.Client.Oqtane",
            Resources = new List<Resource>()
            {
                // Google Fonts
                new Stylesheet("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"),

                // Vendor CSS Files
                // Bootstrap css files removed here for better RTL support
                new Stylesheet("~/assets/vendor/bootstrap-icons/bootstrap-icons.css"),
                new Stylesheet("~/assets/vendor/aos/aos.css"),                                      // Animate On Scroll
                new Stylesheet("~/assets/vendor/glightbox/css/glightbox.min.css"),                  // GLightbox can display images, iframes, inline content and videos with optional autoplay for YouTube, Vimeo and self hosted videos.

                // Template Main CSS Files in Default.Razor

                // Vendor JS Files
                new Script("~/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"),
                new Script("~/assets/vendor/aos/aos.js"),
                new Script("~/assets/vendor/glightbox/js/glightbox.min.js"),
                new Script("~/assets/vendor/swiper/swiper-bundle.min.js"),
                new Script("~/assets/vendor/waypoints/noframework.waypoints.js"),
                new Script("~/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"),
                new Script("~/assets/vendor/isotope-layout/isotope.pkgd.min.js"),
                new Script("~/assets/vendor/AdminLTE/adminlte.min.js"),                             // AdminLTE JavaScript

                // Template Main JS Files
                new Script("~/assets/js/main.js", "", "", ResourceLocation.Body, ResourceLoadBehavior.Always, null, "", "", RenderModes.Static),
                new Script("~/assets/js/interop.js", "", "", ResourceLocation.Body, ResourceLoadBehavior.None, null, "", "", RenderModes.Interactive)
            }
        };
    }
}