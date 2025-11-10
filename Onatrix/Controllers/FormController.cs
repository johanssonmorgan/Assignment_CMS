using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Website.Controllers;
using Onatrix.Services;
using Onatrix.ViewModels;

namespace Onatrix.Controllers
{
    public class FormController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider, FormSubmissionsService formSubmissions) : SurfaceController(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
    {
        private readonly FormSubmissionsService _formSubmissions = formSubmissions;

        public IActionResult HandleCallbackForm(CallbackFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return CurrentUmbracoPage();
            }

            var result = _formSubmissions.SaveCallbackRequest(model);
            if (!result)
            {
                TempData["CallbackFormError"] = "There was an error submitting the form. Please try again.";
                return RedirectToCurrentUmbracoPage();
            }

            TempData["CallbackFormSuccess"] = "Thank you for your request. We will get back to you shortly.";
            return RedirectToCurrentUmbracoPage();
        }
        public IActionResult HandleEmailForm(EmailFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return CurrentUmbracoPage();
            }

            var result = _formSubmissions.SaveEmailRequest(model);
            if (!result)
            {
                TempData["EmailFormError"] = "There was an error submitting the form. Please try again.";
                return RedirectToCurrentUmbracoPage();
            }

            TempData["EmailFormSuccess"] = "Thank you for your request. We will get back to you shortly.";
            return RedirectToCurrentUmbracoPage();
        }
        public IActionResult HandleQuestionForm(QuestionFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return CurrentUmbracoPage();
            }

            var result = _formSubmissions.SaveQuestionRequest(model);
            if (!result)
            {
                TempData["QuestionFormError"] = "There was an error submitting the form. Please try again.";
                return RedirectToCurrentUmbracoPage();
            }

            TempData["QuestionFormSuccess"] = "Thank you for your question. We will get back to you shortly.";
            return RedirectToCurrentUmbracoPage();
        }
    }
}