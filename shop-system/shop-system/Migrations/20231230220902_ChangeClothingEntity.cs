using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace shop_system.Migrations
{
    /// <inheritdoc />
    public partial class ChangeClothingEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClothingAvailability_Shops_ShopId",
                table: "ClothingAvailability");

            migrationBuilder.AlterColumn<int>(
                name: "ShopId",
                table: "ClothingAvailability",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Clothes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Season",
                table: "Clothes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_ClothingAvailability_Shops_ShopId",
                table: "ClothingAvailability",
                column: "ShopId",
                principalTable: "Shops",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClothingAvailability_Shops_ShopId",
                table: "ClothingAvailability");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Clothes");

            migrationBuilder.DropColumn(
                name: "Season",
                table: "Clothes");

            migrationBuilder.AlterColumn<int>(
                name: "ShopId",
                table: "ClothingAvailability",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_ClothingAvailability_Shops_ShopId",
                table: "ClothingAvailability",
                column: "ShopId",
                principalTable: "Shops",
                principalColumn: "Id");
        }
    }
}
