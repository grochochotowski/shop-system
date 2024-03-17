using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace shop_system.Migrations
{
    /// <inheritdoc />
    public partial class updatePropsOfClient : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "InvoiceType",
                table: "Clients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NIP",
                table: "Clients",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InvoiceType",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "NIP",
                table: "Clients");
        }
    }
}
