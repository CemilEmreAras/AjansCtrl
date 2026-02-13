import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 md:pt-48 md:pb-0 bg-white overflow-hidden">
            <div className="container mx-auto px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Tiny Red Header */}
                    <span className="text-[#A91D1D] text-[11px] font-black uppercase tracking-[0.4em] mb-12">
                        BİZ KİMİZ?
                    </span>

                    {/* Main Quote Text - Using !text-black and inline style for absolute guarantee */}
                    <h2
                        className="text-3xl md:text-[2.8rem] font-bold !text-black leading-[1.4] tracking-tight mb-20 px-4"
                        style={{ color: '#000000' }}
                    >
                        "AJANS CTRL, markaların dijital dünyada sürdürülebilir büyüme elde etmesi için strateji, yaratıcılık ve teknoloji entegrasyonunu benimseyen profesyonel bir dijital ajanstır."
                    </h2>

                    {/* Vertical Red Line */}
                    <div className="w-[1px] h-32 bg-[#A91D1D]/40"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
