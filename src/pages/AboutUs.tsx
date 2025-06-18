
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Code, Award, MapPin, Briefcase } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">EASIQ</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">首页</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">公司简介</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">解决方案</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">成功案例</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">技术支持及产品服务</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">联系我们</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                关于我们
              </Button>
              <Button variant="outline" size="sm">
                Blog
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - About Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              专注代码编程技术服务，学习企业、高效的开发技术。A级技术平台，提供各类IT解决方案，为企业提供全方位的技术服务
            </p>
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              联系我们
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">公司简介</h2>
          </div>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-6 leading-relaxed">
            <p>
              专业的程序开发技术服务商，学习企业建设智能数据的开发，A级技术平台，提供各类IT解决方案的企业级端解决领跑服务。与企
              业专业开发，<span className="text-blue-600 font-medium">https://www.jd.com/</span>，人工智能，机器学习等方向，守护立体2020年的企业全方位技术服务解决
              计划完全工作性。
            </p>
            <p>
              中产业型企业技术产品，提供个性化有思想提升的 <span className="text-blue-600 font-medium">Laravel/based technology</span> 、软件技术、企业应用程序开发方向有点复杂 <span className="text-blue-600 font-medium">Node.js/
              Query.js</span> 开源技术，Web应用程序  集合型开发团队，各行业产品数据软件研究开发以及系统集成开发应用，提供扩展的高品质的软件开产
              品运营，中华技术服务业务门户，上传利用统有C&M算法和产品应用的完全产品开发服务，到完善市场理论产品开发。
            </p>
            <p>
              过去几年的大服务技术研发选成体，学术发展、支持方案，为技术开发平台，上海技术、台山技术为全局性一起服务技术业务网，进军将是
              专产业内技术服务需求，创上以外技术服务。
            </p>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">联系咨询，我们期待合作</h3>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">软件开发</h3>
                <p className="text-gray-600">为企业提供专业的软件开发服务</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">合作交流</h3>
                <p className="text-gray-600">建立长期合作关系，共同发展</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">服务</h3>
                <p className="text-gray-600">提供优质的技术服务和支持</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Team */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">公司团队</h2>
          </div>
          
          {/* World Map Illustration */}
          <div className="relative bg-white rounded-xl p-8 mb-8 shadow-sm">
            <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg relative">
              <div className="text-gray-400 text-center">
                <Globe className="w-24 h-24 mx-auto mb-4" />
                <p className="text-lg">全球分布式团队</p>
              </div>
              
              {/* Location markers */}
              <div className="absolute top-1/4 left-1/4 flex items-center space-x-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                <MapPin className="w-4 h-4" />
                <span>美国硅谷</span>
              </div>
              
              <div className="absolute top-1/3 right-1/4 flex items-center space-x-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                <MapPin className="w-4 h-4" />
                <span>中国上海</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">合作伙伴</h2>
          </div>
          
          {/* Partner showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SG</h3>
              <p className="text-gray-600 leading-relaxed">
                SG是一家专注在线化文件PDF的企业级学"SG"企业服务公交
                开放服务的高频，重新、支持了多个企业规模项目的用户分
                解决技术问题、产业客户发展。作为分中心技术服务提供商
                时基对象的分配服务分离，我们能够提供高价值、高质量、快
                优质支持：自从有了不高端服务的物化效业，服务、支持以及伙
                方案优质。
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-8 flex items-center justify-center h-64">
              <div className="text-center">
                <Briefcase className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-green-800 font-semibold">合作伙伴展示</p>
              </div>
            </div>
          </div>
          
          {/* Partner logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">aws</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">ASUS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">AWeber</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">cisco</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">DESIGN</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">HP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">Lenovo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-300">客户</div>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">260+</div>
              <div className="text-gray-300">项目</div>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">80+</div>
              <div className="text-gray-300">技术</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">联系我们</h2>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">电话</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">What Product Service Are You Interested In?</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Company or Org</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                联系我们
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">EASIQ</div>
              <p className="text-gray-400 text-sm mb-4">
                专业的程序、系统开发<br />
                数字化转型技术服务专家
              </p>
              <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                400-400-7095
              </Button>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">关于我们</a></li>
                <li><a href="#" className="hover:text-white">服务范围</a></li>
                <li><a href="#" className="hover:text-white">联系方式</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">服务</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">小程序开发</a></li>
                <li><a href="#" className="hover:text-white">APP开发</a></li>
                <li><a href="#" className="hover:text-white">网站建设</a></li>
                <li><a href="#" className="hover:text-white">系统开发</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">解决</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">制造行业</a></li>
                <li><a href="#" className="hover:text-white">教育行业</a></li>
                <li><a href="#" className="hover:text-white">金融行业</a></li>
                <li><a href="#" className="hover:text-white">电商行业</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">联系</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">新闻动态</a></li>
                <li><a href="#" className="hover:text-white">技术博客</a></li>
                <li><a href="#" className="hover:text-white">案例分享</a></li>
                <li><a href="#" className="hover:text-white">行业观察</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 EASIQ. 版权所有 保留所有权利</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
