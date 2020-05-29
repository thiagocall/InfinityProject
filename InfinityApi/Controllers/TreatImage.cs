using System;


namespace InfinityApi.Controllers
{
    public class TreatImage
    {

        public void ConvertImage()
        {

            string imagePath = @"E:\images\sample.png";
            string imgBase64String = GetBase64StringForImage(imagePath);
            Console.WriteLine(imgBase64String);
        }

        protected static string GetBase64StringForImage(string imgPath)  
{  
      byte[] imageBytes = System.IO.File.ReadAllBytes(imgPath);  
      string base64String = Convert.ToBase64String(imageBytes);  
      return base64String;  
}  


    }
}