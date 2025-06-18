
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
          <p className="text-lg text-gray-600">准备开始您的项目？联系我们获取专业咨询</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">联系方式</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">邮箱</p>
                    <p className="text-gray-900 font-medium">contact@easiq.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">电话</p>
                    <p className="text-gray-900 font-medium">400-888-8888</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">地址</p>
                    <p className="text-gray-900 font-medium">上海市浦东新区科技园</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">工作时间</h4>
              <p className="text-blue-100 text-sm mb-4">
                我们随时准备为您提供专业的技术咨询和服务支持
              </p>
              <div className="space-y-2 text-sm">
                <p>周一至周五：9:00 - 18:00</p>
                <p>周六：10:00 - 16:00</p>
                <p>紧急项目支持：24/7</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">发送消息</CardTitle>
                <CardDescription>
                  请填写以下信息，我们将在24小时内与您取得联系
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名 *</Label>
                      <Input 
                        id="name"
                        type="text" 
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">公司名称</Label>
                      <Input 
                        id="company"
                        type="text" 
                        placeholder="请输入公司名称（可选）"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱 *</Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="请输入您的邮箱"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">联系电话 *</Label>
                      <Input 
                        id="phone"
                        type="tel" 
                        placeholder="请输入联系电话"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">服务类型</Label>
                    <select 
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">请选择服务类型</option>
                      <option value="website">网站建设开发</option>
                      <option value="miniprogram">小程序开发</option>
                      <option value="system">系统定制开发</option>
                      <option value="consulting">技术咨询服务</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget">预算范围</Label>
                    <select 
                      id="budget"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">请选择预算范围</option>
                      <option value="10k-50k">1万-5万</option>
                      <option value="50k-100k">5万-10万</option>
                      <option value="100k-200k">10万-20万</option>
                      <option value="200k+">20万以上</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">项目需求 *</Label>
                    <Textarea 
                      id="message"
                      rows={5}
                      placeholder="请详细描述您的项目需求、预期功能、时间要求等..."
                      required
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="privacy"
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                      我同意EASIQ处理我的个人信息，并接受
                      <a href="#" className="text-blue-600 hover:underline">隐私政策</a>
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    发送咨询
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
