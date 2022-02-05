FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["albums.csproj", "albums/"]
RUN dotnet restore "albums/albums.csproj"
WORKDIR "/src/albums"
COPY . .
RUN dotnet build "albums.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "albums.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "albums.dll"]