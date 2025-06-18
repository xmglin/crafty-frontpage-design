import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Code, Award, MapPin, Briefcase } from 'lucide-react';

const Index = () => {
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
                <a href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">公司简介</a>
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\"/></svg>')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">专业的程序开发技术服务商</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              助力企业建设智能数据化开发，A级技术平台，提供各类IT解决方案的企业级端到端解决方案服务
            </p>
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              了解更多
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的服务</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              提供全方位的技术服务，满足企业各种需求
            </p>
          </div>
          
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

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">关于我们</h2>
              <p className="text-lg text-gray-600 mb-6">
                专业的程序开发技术服务商，助力企业建设智能数据化开发，A级技术平台，提供各类IT解决方案的企业级端到端解决方案服务。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                我们专注于人工智能，机器学习等方向，守护企业全方位技术服务解决方案。
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                了解更多
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                  <p className="text-gray-600">客户</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">260+</div>
                  <p className="text-gray-600">项目</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">80+</div>
                  <p className="text-gray-600">技术</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-gray-600">年经验</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              准备开始您的项目？联系我们获取专业咨询
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-200">地址</p>
                    <p className="font-medium">上海市浦东新区科技园</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-200">电话</p>
                    <p className="font-medium">400-888-8888</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-200">邮箱</p>
                    <p className="font-medium">contact@easiq.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">留言</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  发送消息
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">EASIQ</div>
              <p className="text-gray-400 text-sm">
                专业的程序、系统开发<br />
                数字化转型技术服务专家
              </p>
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
              <h3 className="font-semibold mb-4">解决方案</h3>
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

export default Index;
