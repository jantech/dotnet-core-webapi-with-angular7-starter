using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using sampleapp.Core;

namespace sampleapp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateWebHostBuilder(args).Build();

            // seed the data
            using (var scope = host.Services.CreateScope())
            {

                var services = scope.ServiceProvider;
                try
                {
                    var dbSeedData = services.GetRequiredService<ISeedData>();
                    dbSeedData.InitData();
                }
                catch (Exception ex)
                {
                    var msg = ex.Message;
                }

            }

            host.Run();

        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
