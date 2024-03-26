using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace shop_system.Migrations
{
    /// <inheritdoc />
    public partial class ClientName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Clients",
                newName: "ClientName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ClientName",
                table: "Clients",
                newName: "Name");
        }
    }
}
