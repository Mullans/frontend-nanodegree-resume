var bio = {
    'name': 'Sean Mullan',
    'role': 'Software Developer',
    'contacts': {
        'mobile': '(319) 331-4863',
        'email': 'sean@seanmullan.com',
        'github': 'mullans',
        'location': 'Iowa City, IA'
    },
    'welcomeMessage': 'Hi, my name is Sean!',
    'skills': ['JS', 'CSS', 'HTML', 'Responsive Web Design', 'Objective-C (OSX and iOS)', 'Swift', 'Java', 'Python', 'Adobe Creative Suite'],
    'biopic': 'images/myPhoto.jpg',
    display: function() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('.header-top').append(formattedName);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('.header-top').append(formattedRole);
        var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
        $('#header').append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcomeMsg);

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            var formattedSkill;
            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
                $('#skills').append(formattedSkill);
            }
        }
    }
};

var education = {
    'schools': [{
        'name': 'Carleton College',
        'location': 'Northfield, MN',
        'degree': 'Bachelor of Arts',
        'majors': ['Computer Science'],
        'minors': ['Cognitive Science'],
        'dates': '2012 - 2016',
        'url': 'http://www.carleton.edu'
    }],
    'onlineCourses': [{
        'title': 'Front End Web Developer',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }],
    display: function() {
        for (var index = 0; index < education.schools.length; index++) {
            var school = education.schools[index];
            var node = $(HTMLschoolStart);
            $('#education').append(node);
            var formattedName = HTMLschoolName.replace('%data%', school.name);
            formattedName = formattedName.replace('#', school.url);
            var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
            node.append(formattedName + formattedDegree);
            var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
            node.append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
            node.append(formattedLocation);
            for (var majorIndex = 0; majorIndex < school.majors.length; majorIndex++) {
                var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors[majorIndex]);
                node.append(formattedMajor);
            }
            for (var minorIndex = 0; minorIndex < school.minors.length; minorIndex++) {
                var formattedMinor = '<em><br>Minor: %data%</em>'.replace('%data%', school.minors[minorIndex]);
                node.append(formattedMinor);
            }
        }
        if (education.onlineCourses.length !== 0) {
            $('#education').append(HTMLonlineClasses);
        }
        for (var onlineIndex = 0; onlineIndex < education.onlineCourses.length; onlineIndex++) {
            var onlineNode = $(HTMLschoolStart);
            $('#education').append(onlineNode);

            var onlineSchool = education.onlineCourses[onlineIndex];
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', onlineSchool.title);
            formattedOnlineTitle = formattedOnlineTitle.replace('#', 'https://www.udacity.com/');
            formattedOnlineSchool = HTMLonlineSchool.replace('%data%', onlineSchool.school);
            onlineNode.append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace('%data%', onlineSchool.dates);
            onlineNode.append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace('%data%', onlineSchool.url);
            onlineNode.append(formattedOnlineURL);
        }
    }
};

var work = {
    'jobs': [{
        'employer': 'Silent Lupin LLC',
        'title': 'Founder',
        'location': 'Iowa City, Iowa',
        'dates': 'June 2013 - Present',
        'description': 'Founded the company in the state of Iowa. Consulted and assisted with digitizing records for Kylemore Center LLC. Developed a POS/Inventory management application for Kylemore Center LLC.'

    }, {
        'employer': 'Carleton College',
        'title': 'Assisstant to the Academic Technologist',
        'location': 'Northfield, MN',
        'dates': 'June 2014 - June 2015',
        'description': 'Used Python and Objective-C to work with data management and refinement projects. Created a web-to-pdf archiving system for Carleton’s Moodle course pages. Used Python to clean data from Carleton digital library archives. Developed an application to split an image archive based on blank TIFF images into individual segments.'

    }, {
        'employer': 'Carleton College',
        'title': 'Grader',
        'location': 'Northfield, MN',
        'dates': 'March 2015 - June 2016',
        'description': 'Chosen to grade assignments for Evolutionary Computing, Introduction to Computer Science, Data Structures, Natural Language Processing, and Operating System classes from the Spring 2015 term to the Spring 2016 term based on familiarity with the relevant coursework.'
    }, {
        'employer': 'Stroll Health',
        'title': 'Technical Intern',
        'location': 'San Francisco, CA',
        'dates': 'November 2015 - December 2015',
        'description': 'Worked as part of a front-end development team for the Stroll Health website. Worked on investor research for Series A funding.'
    }, {
        'employer': 'QCI',
        'title': 'Test Automation Developer',
        'location': 'Des Moines, IA',
        'dates': 'September 2016 - Present',
        'description': 'Test automation developer contracted by QCI to work with DuPont Pioneer on extending the existing application that supports the Global Field Seed Management processes. Work including taking part as a member of a Scrum team, working with the QA test lead and the team tech lead to identify test scripts to automate new development. '
    }],
    display: function() {
        var formattedEmployer;
        var formattedTitle;
        var formattedLocation;
        var formattedDates;
        var formattedDescription;
        for (var job = 0; job < work.jobs.length; job++) {
            $('#workExperience').append(HTMLworkStart);
            formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
            formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

var projects = {
    'projects': [{
        'title': 'upwardPOS',
        'dates': 'July 2015 - Present',
        'description': 'An integrated inventory and POS system for small businesses. Tracks invoices, clients, inventory, and can handle payments by connecting the user\'s Stripe account.',
        'images': ['images/Upward.png'],
        'url': 'http://upwardpos.com'
    }, {
        'title': 'Text to Speech',
        'dates': 'October 2015',
        'description': 'Written in Java as a final project for a Natural Language Processing course, this program takes in text and converts it into spoken phonemes. This program uses the Carnegie Mellon phoneme dictionary for known words, but also has an algorithm that lets it pronounce any gibberish that is entered as well.',
        'images': ['images/typewriter.jpg'],
        'url': 'https://github.com/Mullans/NLPFinal'
    }, {
        'title': 'Evolutionary Stock Trader',
        'dates': 'February 2016 - March 2016',
        'description': 'A genetic algorithm to trade S&P500 stocks. Uses genetically created and refined decision trees to optimize stock trading using a variety of different features of the stocks and their companies over the course of a variable period of trading time. It is in Java and utilizes the jpgpp library for genetic algorithms. This was made as my senior project at Carleton College and was written as a team of 3 people.',
        'images': ['images/stocks.jpg'],
        'url': 'https://github.com/tdquang/Genetic-Programming-Stock-Trading'
    }, {
        'title': 'Lithograph Generator',
        'dates': 'January 2014',
        'description': 'Takes in an image and either entered text or text file, then overlays the text on the image to create a beautiful lithographic picture. This was written in Java and was written purely for the fun of making it.',
        'images': ['images/words.jpg'],
        'url': 'https://github.com/Mullans/Lithograph'
    }],
    display: function() {
        for (var index = 0; index < projects.projects.length; index++) {
            $('#projects').append(HTMLprojectStart);
            var project = projects.projects[index];
            var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
            formattedTitle = formattedTitle.replace('#', project.url);
            var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);

            for (var imageIndex = 0; imageIndex < project.images.length; imageIndex++) {
                var formattedImage = HTMLprojectImage.replace('%data%', project.images[imageIndex]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};








bio.display();
work.display();
education.display();
projects.display();
$('#mapDiv').append(googleMap);
