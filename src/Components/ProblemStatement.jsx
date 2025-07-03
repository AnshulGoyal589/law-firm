import React from 'react';

const ProblemStatement = () => {
    const areas = [
        { title: 'Founders', items: ['Stakeholders', 'Product/Service'], icon: '📋' },
        { title: 'Business Heads', items: ['Revenue Centers', 'Cost Centers'], icon: '⚙️' },
        { title: 'HR & Finance', items: ['Well Being', 'Hygiene'], icon: '👥' },
        { title: 'Legal & Compliance', items: ['?'], icon: '⏱️', isProblem: true }
    ];

    return (
        <section id="problem" className="bg-[#f8f9fa] py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl text-center mb-2 font-bold text-[#1d2d3d] uppercase">The Startup Blind Spot</h2>
                <p className="text-center text-[#6c757d] mb-12 max-w-2xl mx-auto">While focusing on growth, many startups overlook the one area that can halt their progress instantly: legal and compliance.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {areas.map((area) => (
                        <div key={area.title} className="bg-white p-8 rounded-lg text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                            <div className={`mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center text-4xl border-4 ${area.isProblem ? 'border-[#dc3545] text-[#dc3545]' : 'border-[#C0A068] text-[#C0A068]'}`}>
                                {area.icon}
                            </div>
                            <h3 className={`font-serif text-2xl mb-4 font-bold ${area.isProblem ? 'text-[#dc3545]' : 'text-[#1d2d3d]'}`}>{area.title}</h3>
                            <ul className="text-[#6c757d]">
                                {area.items.map((item) => (
                                    <li key={item} className="mt-2 text-lg">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;