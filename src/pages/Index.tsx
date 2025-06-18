import React, { useState } from 'react';
import { Shield, Code, Users, Smartphone, Globe, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">EASIQ</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">首页</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">产品与服务</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">关于我们</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">解决方案</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">联系我们</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-gray-900 block px-3 py-2 text-base font-medium">首页</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium">产品与服务</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium">关于我们</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium">解决方案</a>
              <a href="#" className="text-gray-600 block px-3 py-2 text-base font-medium">联系我们</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                高端定制建站解决方案
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                为企业提供专业的定制化网站开发服务，打造独特的数字化品牌体验
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>开始您的项目</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-blue-300 text-blue-100 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors">
                  了解更多
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Shield className="w-16 h-16 text-white mb-4" />
                <div className="space-y-3">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">安全防护</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm">高性能优化</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-sm">响应式设计</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400 rounded-xl opacity-60 transform -rotate-12"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-purple-400 rounded-lg opacity-40 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="团队协作"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">年经验</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                成就您，我们的使命
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                我们是一支充满激情的技术团队，专注于为企业提供高质量的定制化网站开发服务。凭借多年的行业经验和技术积累，我们致力于将您的创意转化为现实，打造独特的数字化品牌体验。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                从前端到后端，从设计到部署，我们提供全方位的技术解决方案，确保每一个项目都能达到最高的质量标准。
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                了解我们的服务
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                团队核心技术
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">前端开发技术</h3>
                    <p className="text-gray-600">React, Vue.js, Angular等现代前端框架</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">后端开发</h3>
                    <p className="text-gray-600">Node.js, Python, Java等后端技术栈</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">移动端开发</h3>
                    <p className="text-gray-600">响应式设计，PWA，混合开发</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">安全与性能</h3>
                    <p className="text-gray-600">代码安全审查，性能优化，SEO优化</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-200">实时监控</span>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">网站性能</span>
                        <span className="text-green-400 text-sm font-semibold">98%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">安全等级</span>
                        <span className="text-blue-400 text-sm font-semibold">A+</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">用户体验</span>
                        <span className="text-purple-400 text-sm font-semibold">优秀</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">产品/服务</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              为客户提供全方位的数字化解决方案，从网站建设到系统开发，满足不同业务需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">网站建设开发</h3>
              <p className="text-gray-600 text-sm">企业官网、电商平台、门户网站等各类网站开发</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">小程序开发</h3>
              <p className="text-gray-600 text-sm">微信小程序、支付宝小程序等移动端应用开发</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">系统定制开发</h3>
              <p className="text-gray-600 text-sm">ERP、CRM、OA等企业管理系统定制开发</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">技术咨询服务</h3>
              <p className="text-gray-600 text-sm">架构设计、技术选型、性能优化等咨询服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">客户案例</h2>
            <p className="text-lg text-gray-600">精选优秀项目案例，展示我们的专业能力</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80" 
                alt="海港集团"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">海港集团</h3>
                <p className="text-gray-600 text-sm mb-4">
                  为海港集团打造的现代化企业官网，采用响应式设计，完美适配各种设备。集成了智能客服系统和在线业务办理功能。
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>查看详情</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=400&q=80" 
                alt="Harrison Lab"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Harrison Lab</h3>
                <p className="text-gray-600 text-sm mb-4">
                  科研实验室信息管理系统，包含实验数据管理、设备预约、项目进度跟踪等功能模块，大大提升了实验室的工作效率。
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>查看详情</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" 
                alt="时计科技"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">时计科技</h3>
                <p className="text-gray-600 text-sm mb-4">
                  高端制造业企业的数字化转型项目，开发了包含生产管理、质量控制、供应链管理的综合性企业管理平台。
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>查看详情</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Replaced with new ContactForm component */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EASIQ</span>
              </div>
              <p className="text-gray-300 text-sm">
                专业的网站开发与数字化解决方案提供商
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">产品与服务</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">网站建设</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">小程序开发</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">系统开发</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">技术咨询</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">解决方案</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">企业官网</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">电商平台</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">管理系统</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">移动应用</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>邮箱：contact@easiq.com</p>
                <p>电话：400-888-8888</p>
                <p>地址：上海市浦东新区科技园</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 EASIQ. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
