import React, { useState } from 'react';
import ContactSidebar from './ContactSidebar';

// Full list of countries for nationality dropdown
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const FreeAssessment = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        dob: '',
        nationality: 'Sri Lanka',
        destinationCountry: 'Belarus',
        visaType: 'Visit Visa',
        visaRejection: '',
        comment: '',
        // Hidden honeypot fields
        doHave: '',
        hiddenField: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check honeypot - if filled, it's likely a bot
        if (formData.doHave || formData.hiddenField) {
            console.log('Spam detected');
            return;
        }

        // Create form data for submission
        const submitData = new FormData();
        submitData.append('wpforms-859-field_1[first]', formData.firstName);
        submitData.append('wpforms-859-field_1[last]', formData.lastName);
        submitData.append('wpforms-859-field_8', formData.phone);
        submitData.append('wpforms-859-field_7', formData.email);
        submitData.append('wpforms-859-field_12', formData.dob);
        submitData.append('wpforms-859-field_9', formData.nationality);
        submitData.append('wpforms-859-field_11', formData.destinationCountry);
        submitData.append('wpforms-859-field_14', formData.visaType);
        submitData.append('wpforms-859-field_15', formData.visaRejection);
        submitData.append('wpforms-859-field_3', formData.comment);
        submitData.append('wpforms-859-field_2', formData.doHave);
        submitData.append('wpforms-859-field_4', formData.hiddenField);

        // Submit to the actual form endpoint
        fetch('https://immigrationagency.lk/free-online-assessment/', {
            method: 'POST',
            body: submitData
        })
            .then(response => {
                if (response.ok) {
                    alert('Thank you! Your assessment request has been submitted successfully. We will contact you soon.');
                    // Reset form
                    setFormData({
                        firstName: '',
                        lastName: '',
                        phone: '',
                        email: '',
                        dob: '',
                        nationality: 'Sri Lanka',
                        destinationCountry: 'United Kingdom',
                        visaType: 'Visit Visa',
                        visaRejection: '',
                        comment: '',
                        doHave: '',
                        hiddenField: ''
                    });
                } else {
                    alert('There was an error submitting your form. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again.');
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6">
                        Free Online Assessment
                    </h1>
                    <div className="w-24 h-1 bg-[var(--accent-blue)] mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        The Visa Centre offers free initial consultation and assessment for clients who wish to inquire about their visa application viability to prospective countries.
                    </p>
                </div>

                {/* Assessment Form Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Form (70%) */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Hidden Anti-Spam Fields */}
                                <input
                                    type="text"
                                    id="wpforms-859-field_2"
                                    name="doHave"
                                    value={formData.doHave}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                                <input
                                    type="text"
                                    id="wpforms-859-field_4"
                                    name="hiddenField"
                                    value={formData.hiddenField}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />

                                {/* Name Fields */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                id="wpforms-859-field_1-first"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 placeholder-gray-400"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="wpforms-859-field_1-last"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 placeholder-gray-400"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="wpforms-859-field_8" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="wpforms-859-field_8"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+94 XXX XXX XXX"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 placeholder-gray-400"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="wpforms-859-field_7" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="wpforms-859-field_7"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 placeholder-gray-400"
                                    />
                                </div>

                                {/* Date of Birth Field */}
                                <div>
                                    <label htmlFor="wpforms-859-field_12" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Date of Birth <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="wpforms-859-field_12"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        placeholder="yyyy/mm/dd"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 placeholder-gray-400"
                                    />
                                </div>

                                {/* Nationality Dropdown */}
                                <div>
                                    <label htmlFor="wpforms-859-field_9" className="block text-sm font-semibold text-gray-700 mb-3">
                                        What is your nationality? <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="wpforms-859-field_9"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 bg-white"
                                    >
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Destination Country Dropdown */}
                                <div>
                                    <label htmlFor="wpforms-859-field_11" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Country you would like to apply to? <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="wpforms-859-field_11"
                                        name="destinationCountry"
                                        value={formData.destinationCountry}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 bg-white"
                                    >
                                        <option value="United Kingdom" className="font-bold">Belarus</option>
                                        <option value="United States">Romania</option>
                                        <option value="Canada">Moldova</option>
                                        <option value="Australia">Greece</option>
                                        <option value="Australia">Serbia</option>

                                        {/* <option value="New Zealand">New Zealand</option>
                                        <option value="Germany">Germany</option>
                                        <option value="France">France</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Japan">Japan</option>
                                        <option value="South Korea">South Korea</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>  */}
 
                                    </select>
                                </div>

                                {/* Visa Type Dropdown */}
                                <div>
                                    <label htmlFor="wpforms-859-field_14" className="block text-sm font-semibold text-gray-700 mb-3">
                                        What type of visa do you need? <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="wpforms-859-field_14"
                                        name="visaType"
                                        value={formData.visaType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 bg-white"
                                    >
                                        <option value="Visit Visa" className="font-bold">Visit Visa</option>
                                        <option value="Student Visa">Student Visa</option>
                                        <option value="Work Visa">Work Visa</option>
                                        <option value="Business Visa">Business Visa</option>
                                        <option value="Permanent Residence">Permanent Residence</option>
                                        <option value="Spouse Visa">Spouse Visa</option>
                                        <option value="Parent Visa">Parent Visa</option>
                                        <option value="Dependent Visa">Dependent Visa</option>
                                        <option value="Citizenship">Citizenship</option>
                                        <option value="Transit Visa">Transit Visa</option>
                                    </select>
                                </div>

                                {/* Visa Rejection History Radio Buttons */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Have you been rejected for any visa to any country before? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="wpforms-859-field_15-yes"
                                                name="visaRejection"
                                                value="Yes"
                                                checked={formData.visaRejection === 'Yes'}
                                                onChange={handleChange}
                                                required
                                                className="w-4 h-4 text-[var(--accent-blue)] border-gray-300 focus:ring-[var(--accent-blue)] focus:ring-2"
                                            />
                                            <label htmlFor="wpforms-859-field_15-yes" className="ml-3 text-gray-700 cursor-pointer">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="wpforms-859-field_15-no"
                                                name="visaRejection"
                                                value="No"
                                                checked={formData.visaRejection === 'No'}
                                                onChange={handleChange}
                                                required
                                                className="w-4 h-4 text-[var(--accent-blue)] border-gray-300 focus:ring-[var(--accent-blue)] focus:ring-2"
                                            />
                                            <label htmlFor="wpforms-859-field_15-no" className="ml-3 text-gray-700 cursor-pointer">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Comment/Message Field (Optional) */}
                                <div>
                                    <label htmlFor="wpforms-859-field_3" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Comment or Message
                                    </label>
                                    <textarea
                                        id="wpforms-859-field_3"
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Please provide any additional information or questions..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-[var(--accent-blue)] outline-none transition-all text-gray-900 placeholder-gray-400 resize-y"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-[var(--accent-blue)] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                                    >
                                        Submit Assessment Request
                                    </button>
                                </div>

                                {/* Privacy Notice */}
                                <p className="text-sm text-gray-500 text-center mt-6">
                                    By submitting this form, you agree to our privacy policy. We will use your information solely for visa assessment purposes.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Contact Sidebar (30%) */}
                    <div className="lg:col-span-1">
                        <ContactSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeAssessment;
