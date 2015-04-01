(function(namespace){

var sampleData = [
        {
            "timeStamp": "2015-03-24T21:02:01.0567622+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToAxInventoryGranularity",
            "startDate": "2015-03-24T21:02:01.0567622+05:30",
            "endDate": "2015-03-24T21:02:01.0570846+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.0574084+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToAxInventoryGranularity",
            "startDate": "2015-03-24T21:02:01.0574084+05:30",
            "endDate": "2015-03-24T21:02:01.0577288+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.0580551+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToAxLineGroupInfo",
            "startDate": "2015-03-24T21:02:01.0580551+05:30",
            "endDate": "2015-03-24T21:02:01.0583707+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.0586915+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToAxLineGroupInfo",
            "startDate": "2015-03-24T21:02:01.0586915+05:30",
            "endDate": "2015-03-24T21:02:01.0590094+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6161765+05:30",
            "role": "CampaignWeb",
            "type": "CampaignV2",
            "fullType": "CampaignV2",
            "label": "GetUpdatedDeliveryLines",
            "startDate": "2015-03-24T21:01:59.6161765+05:30",
            "endDate": "2015-03-24T21:01:59.6165989+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6975590+05:30",
            "role": "CampaignWeb",
            "type": "ProductInventoryMapper",
            "fullType": "Microsoft.Advertising.Display.CampaignExtension.ProductInventoryMapper",
            "label": "ToMT",
            "startDate": "2015-03-24T21:01:59.6975590+05:30",
            "endDate": "2015-03-24T21:01:59.6978847+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6980396+05:30",
            "role": "CampaignWeb",
            "type": "ProductInventoryMapper",
            "fullType": "Microsoft.Advertising.Display.CampaignExtension.ProductInventoryMapper",
            "label": "ToMT",
            "startDate": "2015-03-24T21:01:59.6980396+05:30",
            "endDate": "2015-03-24T21:01:59.6981834+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6983378+05:30",
            "role": "CampaignWeb",
            "type": "ProductInventoryMapper",
            "fullType": "Microsoft.Advertising.Display.CampaignExtension.ProductInventoryMapper",
            "label": "ToMT",
            "startDate": "2015-03-24T21:01:59.6983378+05:30",
            "endDate": "2015-03-24T21:01:59.6985181+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6986775+05:30",
            "role": "CampaignWeb",
            "type": "ProductInventoryMapper",
            "fullType": "Microsoft.Advertising.Display.CampaignExtension.ProductInventoryMapper",
            "label": "GetDayPartsFromLine",
            "startDate": "2015-03-24T21:01:59.6986775+05:30",
            "endDate": "2015-03-24T21:01:59.6988825+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6990433+05:30",
            "role": "CampaignWeb",
            "type": "ProductInventoryMapper",
            "fullType": "Microsoft.Advertising.Display.CampaignExtension.ProductInventoryMapper",
            "label": "ToMT",
            "startDate": "2015-03-24T21:01:59.6990433+05:30",
            "endDate": "2015-03-24T21:01:59.6991982+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8467075+05:30",
            "role": "Mediators",
            "type": "ServiceClientFactory",
            "fullType": "Microsoft.Advertising.Services.ServiceModel.ServiceClientFactory",
            "label": "GetServiceInterface",
            "startDate": "2015-03-24T21:02:01.8467075+05:30",
            "endDate": "2015-03-24T21:02:01.8523370+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8539682+05:30",
            "role": "Mediators",
            "type": "ServiceClientFactory",
            "fullType": "Microsoft.Advertising.Services.ServiceModel.ServiceClientFactory",
            "label": "GetServiceInterface",
            "startDate": "2015-03-24T21:02:01.8539682+05:30",
            "endDate": "2015-03-24T21:02:01.8598788+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8609678+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8609678+05:30",
            "endDate": "2015-03-24T21:02:01.8618442+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8627007+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8627007+05:30",
            "endDate": "2015-03-24T21:02:01.8642869+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8660084+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8660084+05:30",
            "endDate": "2015-03-24T21:02:01.8668790+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8712267+05:30",
            "role": "Mediators",
            "type": "ServiceClientFactory",
            "fullType": "Microsoft.Advertising.Services.ServiceModel.ServiceClientFactory",
            "label": "GetServiceInterface",
            "startDate": "2015-03-24T21:02:01.8712267+05:30",
            "endDate": "2015-03-24T21:02:01.8764082+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8773774+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8773774+05:30",
            "endDate": "2015-03-24T21:02:01.8784206+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8792514+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8792514+05:30",
            "endDate": "2015-03-24T21:02:01.8798434+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8825694+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8825694+05:30",
            "endDate": "2015-03-24T21:02:01.8838122+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8856451+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8856451+05:30",
            "endDate": "2015-03-24T21:02:01.8869005+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8881352+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8881352+05:30",
            "endDate": "2015-03-24T21:02:01.8893345+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8905570+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8905570+05:30",
            "endDate": "2015-03-24T21:02:01.8917648+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8932747+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8932747+05:30",
            "endDate": "2015-03-24T21:02:01.8945048+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8955302+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8955302+05:30",
            "endDate": "2015-03-24T21:02:01.8967289+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8980623+05:30",
            "role": "Mediators",
            "type": "ConfigurationClientWrapper",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.DataAccess.ConfigurationClientWrapper",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:01.8980623+05:30",
            "endDate": "2015-03-24T21:02:01.8990897+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.8998194+05:30",
            "role": "Mediators",
            "type": "ServiceClientFactory",
            "fullType": "Microsoft.Advertising.Services.ServiceModel.ServiceClientFactory",
            "label": "GetService",
            "startDate": "2015-03-24T21:02:01.8998194+05:30",
            "endDate": "2015-03-24T21:02:01.9030108+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6993498+05:30",
            "role": "CampaignWeb",
            "type": "ProductCatalogServiceWrapper",
            "fullType": "Microsoft.Advertising.Display.Campaign.Facade.ProductCatalogServiceWrapper",
            "label": "GetProductInventory",
            "startDate": "2015-03-24T21:01:59.6993498+05:30",
            "endDate": "2015-03-24T21:02:05.4514511+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.4516329+05:30",
            "role": "CampaignWeb",
            "type": "ProductInventoryMapper",
            "fullType": "Microsoft.Advertising.Display.CampaignExtension.ProductInventoryMapper",
            "label": "ToUI",
            "startDate": "2015-03-24T21:02:05.4516329+05:30",
            "endDate": "2015-03-24T21:02:05.4517955+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6973282+05:30",
            "role": "CampaignWeb",
            "type": "ProductCatalogFacade",
            "fullType": "Microsoft.Advertising.Display.Campaign.Facade.ProductCatalogFacade",
            "label": "GetProductInventoryForLGWithFCAP",
            "startDate": "2015-03-24T21:01:59.6973282+05:30",
            "endDate": "2015-03-24T21:02:05.4519430+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:01:59.6971050+05:30",
            "role": "CampaignWeb",
            "type": "ProductCatalogRepository",
            "fullType": "Microsoft.Advertising.Display.CampaignRepository.ProductCatalogRepository",
            "label": "GetUpdateDeliveryLines",
            "startDate": "2015-03-24T21:01:59.6971050+05:30",
            "endDate": "2015-03-24T21:02:05.4521134+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.4535937+05:30",
            "role": "CampaignWeb",
            "type": "CampaignV2",
            "fullType": "CampaignV2",
            "label": "GetUpdatedDeliveryLines",
            "startDate": "2015-03-24T21:02:05.4535937+05:30",
            "endDate": "2015-03-24T21:02:05.4574140+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.4578267+05:30",
            "role": "CampaignWeb",
            "type": "HttpContextHelper",
            "fullType": "Microsoft.Advertising.Display.UIShared.Common.Helpers.HttpContextHelper",
            "label": "SetAjaxRedirectionForAuthentication",
            "startDate": "2015-03-24T21:02:05.4578267+05:30",
            "endDate": "2015-03-24T21:02:05.4579913+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6281470+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceClientFactory",
            "fullType": "Microsoft.Advertising.Services.ServiceModel.ServiceClientFactory",
            "label": "GetService",
            "startDate": "2015-03-24T21:02:00.6281470+05:30",
            "endDate": "2015-03-24T21:02:00.6312215+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6318283+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:00.6318283+05:30",
            "endDate": "2015-03-24T21:02:00.6321976+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6325829+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:00.6325829+05:30",
            "endDate": "2015-03-24T21:02:00.6329490+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6400411+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:00.6400411+05:30",
            "endDate": "2015-03-24T21:02:00.6404309+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6408392+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:00.6408392+05:30",
            "endDate": "2015-03-24T21:02:00.6412197+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6416303+05:30",
            "role": "ProductCatalogService.Web",
            "type": "RefreshablePoller",
            "fullType": "Microsoft.Advertising.Display.Shared.SearchCache.RefreshablePoller",
            "label": "Start",
            "startDate": "2015-03-24T21:02:00.6416303+05:30",
            "endDate": "2015-03-24T21:02:00.6420168+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6424049+05:30",
            "role": "ProductCatalogService.Web",
            "type": "RefreshablePoller",
            "fullType": "Microsoft.Advertising.Display.Shared.SearchCache.RefreshablePoller",
            "label": "Start",
            "startDate": "2015-03-24T21:02:00.6424049+05:30",
            "endDate": "2015-03-24T21:02:00.6427936+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6447686+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:00.6447686+05:30",
            "endDate": "2015-03-24T21:02:00.6480495+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6484304+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:00.6484304+05:30",
            "endDate": "2015-03-24T21:02:00.6487966+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.0609567+05:30",
            "role": "ProductCatalogService.Web",
            "type": "AdExpertMediatorProxy",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Proxy.AdExpertMediatorProxy",
            "label": "ServiceCall",
            "startDate": "2015-03-24T21:02:01.0609567+05:30",
            "endDate": "2015-03-24T21:02:06.1932447+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.0606128+05:30",
            "role": "ProductCatalogService.Web",
            "type": "TimingLogger",
            "fullType": "Microsoft.Advertising.Services.Logging.TimingLogger",
            "label": "ExecuteWithLog",
            "startDate": "2015-03-24T21:02:01.0606128+05:30",
            "endDate": "2015-03-24T21:02:06.1942361+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.1999360+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:06.1999360+05:30",
            "endDate": "2015-03-24T21:02:06.2007698+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2016410+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:06.2016410+05:30",
            "endDate": "2015-03-24T21:02:06.2025345+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2033925+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToProductCatalogInventoryResponseItems",
            "startDate": "2015-03-24T21:02:06.2033925+05:30",
            "endDate": "2015-03-24T21:02:06.2042171+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2050820+05:30",
            "role": "ProductCatalogService.Web",
            "type": "CurrencyRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.CurrencyRepository",
            "label": "GetExchangeRate",
            "startDate": "2015-03-24T21:02:06.2050820+05:30",
            "endDate": "2015-03-24T21:02:06.2069500+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2078378+05:30",
            "role": "ProductCatalogService.Web",
            "type": "CurrencyRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.CurrencyRepository",
            "label": "GetExchangeRate",
            "startDate": "2015-03-24T21:02:06.2078378+05:30",
            "endDate": "2015-03-24T21:02:06.2086627+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2095102+05:30",
            "role": "ProductCatalogService.Web",
            "type": "CurrencyRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.CurrencyRepository",
            "label": "ConvertPrice",
            "startDate": "2015-03-24T21:02:06.2095102+05:30",
            "endDate": "2015-03-24T21:02:06.2103180+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2111503+05:30",
            "role": "ProductCatalogService.Web",
            "type": "CurrencyRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.CurrencyRepository",
            "label": "ConvertPrice",
            "startDate": "2015-03-24T21:02:06.2111503+05:30",
            "endDate": "2015-03-24T21:02:06.2119652+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2128111+05:30",
            "role": "ProductCatalogService.Web",
            "type": "CurrencyRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.CurrencyRepository",
            "label": "ConvertPrice",
            "startDate": "2015-03-24T21:02:06.2128111+05:30",
            "endDate": "2015-03-24T21:02:06.2136245+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2144478+05:30",
            "role": "ProductCatalogService.Web",
            "type": "CurrencyRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.CurrencyRepository",
            "label": "ConvertPrice",
            "startDate": "2015-03-24T21:02:06.2144478+05:30",
            "endDate": "2015-03-24T21:02:06.2161670+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2171281+05:30",
            "role": "ProductCatalogService.Web",
            "type": "CurrencyRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.CurrencyRepository",
            "label": "ConvertPrice",
            "startDate": "2015-03-24T21:02:06.2171281+05:30",
            "endDate": "2015-03-24T21:02:06.2180260+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2188583+05:30",
            "role": "ProductCatalogService.Web",
            "type": "CurrencyRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.CurrencyRepository",
            "label": "ConvertPrice",
            "startDate": "2015-03-24T21:02:06.2188583+05:30",
            "endDate": "2015-03-24T21:02:06.2196917+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2205964+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToProductCatalogInventoryResponseItems",
            "startDate": "2015-03-24T21:02:06.2205964+05:30",
            "endDate": "2015-03-24T21:02:06.2214195+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.9070392+05:30",
            "role": "Mediators",
            "type": "ReferenceDataRepository",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.ReferenceData.ReferenceDataRepository",
            "label": "GetSegmentValuesBySegmentValueId",
            "startDate": "2015-03-24T21:02:01.9070392+05:30",
            "endDate": "2015-03-24T21:02:05.0493426+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.9063375+05:30",
            "role": "Mediators",
            "type": "NetworkPricingDataModelTranslator",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.Translator.NetworkPricingDataModelTranslator",
            "label": "GetTagNodesBySegmentsAndPageGroups",
            "startDate": "2015-03-24T21:02:01.9063375+05:30",
            "endDate": "2015-03-24T21:02:05.1931121+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.1946257+05:30",
            "role": "Mediators",
            "type": "ReferenceDataRepository",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.ReferenceData.ReferenceDataRepository",
            "label": "GetAdPlacementsByAdFormat",
            "startDate": "2015-03-24T21:02:05.1946257+05:30",
            "endDate": "2015-03-24T21:02:05.2228860+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.1939561+05:30",
            "role": "Mediators",
            "type": "NetworkPricingDataModelTranslator",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.Translator.NetworkPricingDataModelTranslator",
            "label": "GetAdSizeByAdFormat",
            "startDate": "2015-03-24T21:02:05.1939561+05:30",
            "endDate": "2015-03-24T21:02:05.2236460+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.2249634+05:30",
            "role": "Mediators",
            "type": "ReferenceDataRepository",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.ReferenceData.ReferenceDataRepository",
            "label": "GetAdPlacementsByAdFormat",
            "startDate": "2015-03-24T21:02:05.2249634+05:30",
            "endDate": "2015-03-24T21:02:05.2256202+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.2243116+05:30",
            "role": "Mediators",
            "type": "NetworkPricingDataModelTranslator",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.Translator.NetworkPricingDataModelTranslator",
            "label": "GetAdTypeByAdFormat",
            "startDate": "2015-03-24T21:02:05.2243116+05:30",
            "endDate": "2015-03-24T21:02:05.2262696+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.2297319+05:30",
            "role": "Mediators",
            "type": "TimingLogger",
            "fullType": "Microsoft.Advertising.Services.Logging.TimingLogger",
            "label": "ExecuteWithLog",
            "startDate": "2015-03-24T21:02:05.2297319+05:30",
            "endDate": "2015-03-24T21:02:06.8733253+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:05.2289859+05:30",
            "role": "Mediators",
            "type": "InventoryProxyILA",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.InventoryProxyILA",
            "label": "GetInventoryDailyLineGroup",
            "startDate": "2015-03-24T21:02:05.2289859+05:30",
            "endDate": "2015-03-24T21:02:06.8739534+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.8815379+05:30",
            "role": "Mediators",
            "type": "AggregateAvailabilityAndPricing",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.AggregateAvailabilityAndPricing",
            "label": "CreateAggregateILAInventoryDaily",
            "startDate": "2015-03-24T21:02:06.8815379+05:30",
            "endDate": "2015-03-24T21:02:06.8821753+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.8828443+05:30",
            "role": "Mediators",
            "type": "InventoryDataModelTranslator",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.Translator.InventoryDataModelTranslator",
            "label": "InventoryAggregatedResponseToDailyProjections",
            "startDate": "2015-03-24T21:02:06.8828443+05:30",
            "endDate": "2015-03-24T21:02:06.8835735+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.9042031+05:30",
            "role": "Mediators",
            "type": "AdExpertMediatorService",
            "fullType": "Microsoft.Advertising.Display.AdExpertMediatorService.AdExpertMediatorService",
            "label": "GetProductInventory",
            "startDate": "2015-03-24T21:02:01.9042031+05:30",
            "endDate": "2015-03-24T21:02:06.8875087+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6491825+05:30",
            "role": "ProductCatalogService.Web",
            "type": "RefreshablePoller",
            "fullType": "Microsoft.Advertising.Display.Shared.SearchCache.RefreshablePoller",
            "label": "Start",
            "startDate": "2015-03-24T21:02:00.6491825+05:30",
            "endDate": "2015-03-24T21:02:00.6495640+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6499340+05:30",
            "role": "ProductCatalogService.Web",
            "type": "RefreshablePoller",
            "fullType": "Microsoft.Advertising.Display.Shared.SearchCache.RefreshablePoller",
            "label": "Start",
            "startDate": "2015-03-24T21:02:00.6499340+05:30",
            "endDate": "2015-03-24T21:02:00.6503010+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6546469+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceClientFactory",
            "fullType": "Microsoft.Advertising.Services.ServiceModel.ServiceClientFactory",
            "label": "GetService",
            "startDate": "2015-03-24T21:02:00.6546469+05:30",
            "endDate": "2015-03-24T21:02:00.6576469+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:06.2231110+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ProductCatalogService",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.ProductCatalogService",
            "label": "GetProductInventory",
            "startDate": "2015-03-24T21:02:06.2231110+05:30",
            "endDate": "2015-03-24T21:02:00.6609810+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6624054+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:00.6624054+05:30",
            "endDate": "2015-03-24T21:02:00.6627831+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6631737+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceConfiguration",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Common.ServiceConfiguration",
            "label": "GetValue",
            "startDate": "2015-03-24T21:02:00.6631737+05:30",
            "endDate": "2015-03-24T21:02:00.6635371+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6675374+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToExclusionsDataRequestFromGetProductInventoryRequestItem",
            "startDate": "2015-03-24T21:02:00.6675374+05:30",
            "endDate": "2015-03-24T21:02:00.6678530+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6681828+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ReferenceDataServiceRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.ReferenceDataServiceRepository",
            "label": "GetAdPlacementIdsForAdFormatId",
            "startDate": "2015-03-24T21:02:00.6681828+05:30",
            "endDate": "2015-03-24T21:02:00.6684947+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6688298+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ServiceClientFactory",
            "fullType": "Microsoft.Advertising.Services.ServiceModel.ServiceClientFactory",
            "label": "GetServiceInterface",
            "startDate": "2015-03-24T21:02:00.6688298+05:30",
            "endDate": "2015-03-24T21:02:00.6716984+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6882875+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ReferenceDataServiceRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.ReferenceDataServiceRepository",
            "label": "GetAdPlacementIdsForAdFormatId",
            "startDate": "2015-03-24T21:02:00.6882875+05:30",
            "endDate": "2015-03-24T21:02:00.6891245+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6899544+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToExclusionsDataRequestFromGetProductInventoryRequestItem",
            "startDate": "2015-03-24T21:02:00.6899544+05:30",
            "endDate": "2015-03-24T21:02:00.6907611+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6916441+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ExclusionsDataRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.ExclusionsDataRepository",
            "label": "GetExclusions",
            "startDate": "2015-03-24T21:02:00.6916441+05:30",
            "endDate": "2015-03-24T21:02:00.6924604+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6933339+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToGetExclusionsRequest",
            "startDate": "2015-03-24T21:02:00.6933339+05:30",
            "endDate": "2015-03-24T21:02:00.6941429+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6950029+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToGetExclusionsRequest",
            "startDate": "2015-03-24T21:02:00.6950029+05:30",
            "endDate": "2015-03-24T21:02:00.6958270+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6982957+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ExclusionsDataServiceProxy",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Proxy.ExclusionsDataServiceProxy",
            "label": "ServiceCall",
            "startDate": "2015-03-24T21:02:00.6982957+05:30",
            "endDate": "2015-03-24T21:02:00.6991083+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.9547893+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ExclusionsDataServiceProxy",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Proxy.ExclusionsDataServiceProxy",
            "label": "ServiceCall",
            "startDate": "2015-03-24T21:02:00.9547893+05:30",
            "endDate": "2015-03-24T21:02:00.9551098+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.6974384+05:30",
            "role": "ProductCatalogService.Web",
            "type": "TimingLogger",
            "fullType": "Microsoft.Advertising.Services.Logging.TimingLogger",
            "label": "ExecuteWithLog",
            "startDate": "2015-03-24T21:02:00.6974384+05:30",
            "endDate": "2015-03-24T21:02:00.9554635+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.9566885+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ExclusionsDataRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Repository.ExclusionsDataRepository",
            "label": "GetExclusions",
            "startDate": "2015-03-24T21:02:00.9566885+05:30",
            "endDate": "2015-03-24T21:02:00.9570045+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.9573337+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToAxProductInventoryRequestItem",
            "startDate": "2015-03-24T21:02:00.9573337+05:30",
            "endDate": "2015-03-24T21:02:00.9576448+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.9580093+05:30",
            "role": "ProductCatalogService.Web",
            "type": "Translator",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.Translator.Translator",
            "label": "ToAxProductInventoryRequestItem",
            "startDate": "2015-03-24T21:02:00.9580093+05:30",
            "endDate": "2015-03-24T21:02:00.9583255+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.9596024+05:30",
            "role": "ProductCatalogService.Web",
            "type": "PackageDataRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.ProductDataService.ProductDataRepository.PackageDataRepository",
            "label": "GetPageGroups",
            "startDate": "2015-03-24T21:02:00.9596024+05:30",
            "endDate": "2015-03-24T21:02:01.0072933+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:01.0076374+05:30",
            "role": "ProductCatalogService.Web",
            "type": "PackageDataRepository",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.ProductDataService.ProductDataRepository.PackageDataRepository",
            "label": "GetLanguageAndCountry",
            "startDate": "2015-03-24T21:02:01.0076374+05:30",
            "endDate": "2015-03-24T21:02:01.0557266+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.9592647+05:30",
            "role": "ProductCatalogService.Web",
            "type": "ProductDataGetLocationDetailsOperation",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.ProductDataService.Management.Operations.ProductDataGetLocationDetailsOperation",
            "label": "Execute",
            "startDate": "2015-03-24T21:02:00.9592647+05:30",
            "endDate": "2015-03-24T21:02:01.0560599+05:30"
        },
        {
            "timeStamp": "2015-03-24T21:02:00.9586444+05:30",
            "role": "ProductCatalogService.Web",
            "type": "NetworkManagementDataService",
            "fullType": "Microsoft.Advertising.Display.ProductCatalogService.ProductDataService.NetworkManagementDataService",
            "label": "GetLocationDetails",
            "startDate": "2015-03-24T21:02:00.9586444+05:30",
            "endDate": "2015-03-24T21:02:01.0563847+05:30"
        }
    ]
    ;

namespace.sampleData = sampleData

})(flame);