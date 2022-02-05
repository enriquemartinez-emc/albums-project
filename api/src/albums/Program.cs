using albums.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
RegisterServices(builder);

var app = builder.Build();

// Configure the HTTP request pipeline.
ConfigureApp(app);

app.Run();


static void RegisterServices(WebApplicationBuilder builder)
{
    var services = builder.Services;

    services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();

    services.AddDbContext<AlbumsContext>(options => options
     .UseSqlServer(builder.Configuration.GetConnectionString("AlbumsContext")));

    services.AddMediatR(typeof(Program));

    services.AddCors(options =>
    {
        options.AddDefaultPolicy(
            builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
    });
}

static void ConfigureApp(WebApplication app)
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.UseCors();

    app.UseAuthorization();

    app.MapControllers();
}
