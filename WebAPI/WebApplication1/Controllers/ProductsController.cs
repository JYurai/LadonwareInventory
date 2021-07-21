using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ProductsController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select ProductId, ProductName, Category, Price, Quantity, Inventory, Material1, Material2, PhotoFileName from 
                    dbo.Products";

            DataTable table = new DataTable();
            using(var con= new SqlConnection(ConfigurationManager.
                ConnectionStrings["InventoryAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query,con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post( Products products)
        {
            try
            {
                string query = @"
                    insert into dbo.Products (ProductName, Category, Price, Quantity, Inventory, Material1, Material2, PhotoFileName) values
                    ('" + products.ProductName+ @"', '" + products.Category + @"', '" + products.Price + @"', '" + products.Quantity + @"', '" + products.Inventory + @"', 
                    '" + products.Material1 + @"', '" + products.Material2 + @"', '" + products.PhotoFileName + @"' )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["InventoryAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!!";
            }
            catch (Exception)
            {
                return "Failed to add!!";
            }
        }

        public string Put(Products products)
        {
            try
            {
                string query = @"
                    update dbo.Products set 
                    ProductName='"+products.ProductName+ @"', 
                    Category='"+products.Category+ @"', 
                    Price='" + products.Price + @"', 
                    Quantity='" + products.Quantity + @"', 
                    Inventory='" + products.Inventory + @"', 
                    Material1='" + products.Material1 + @"', 
                    Material2='" + products.Material2 + @"',
                    PhotoFileName='" + products.PhotoFileName + @"'
                    where ProductId =" + products.ProductId+ @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["InventoryAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Updated Successfully!!";
            }
            catch (Exception)
            {
                return "Failed to update!!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Products
                    where ProductId =" + id + @"";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["InventoryAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "deleted Successfully!!";
            }
            catch (Exception)
            {
                return "Failed to delete!!";
            }
        }

        [Route("api/Products/SaveFile")]
        public string saveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {

                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + "anonymous");

                return physicalPath;
            }
        }
    }
}
