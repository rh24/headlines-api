protected void Application_BeginRequest()
       {
           if (Context.Request.HttpMethod != "OPTIONS") return;
           Context.Response.AddHeader("Access-Control-Allow-Origin", Context.Request.Headers["Origin"]);
           Context.Response.AddHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
           Context.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
           Context.Response.AddHeader("Access-Control-Allow-Credentials", "true");
           Context.Response.End();
       }
