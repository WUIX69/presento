import { useEffect } from '@lynx-js/react';

import './App.css';
import { Button } from './components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './components/ui/card';
import { Input } from './components/ui/input';
import { Accordion } from './components/ui/accordion';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert';
import { Switch } from './components/ui/switch';
import { Checkbox } from './components/ui/checkbox';

export function App(props: { onRender?: () => void }) {
  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);
  props.onRender?.();

  return (
    <scroll-view
      className="flex-1 bg-gray-50"
      scroll-y
      style={{ height: '100%' }}
    >
      <view className="p-6 gap-8">
        <view className="mb-4">
          <text className="text-3xl font-bold text-gray-900">Lynx UI</text>
          <text className="text-gray-500 mt-2">
            Shadcn-inspired reusable components for ReactLynx.
          </text>
        </view>
        {/* Buttons Section */}
        <view className="gap-4">
          <text className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Buttons
          </text>
          <view className="flex-row flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
          </view>
        </view>
        <Separator />
        {/* Alerts Section */}
        <view className="gap-4">
          <text className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Alerts
          </text>
          <Alert variant="default">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
        </view>
        <Separator />
        {/* Badges Section */}
        <view className="gap-4">
          <text className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Badges
          </text>
          <view className="flex-row flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </view>
        </view>
        <Separator />
        {/* Cards Section */}
        <view className="gap-4">
          <text className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Cards
          </text>
          <Card>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <view className="gap-4">
                <Input label="Name" placeholder="Name of your project" />
              </view>
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Deploy</Button>
            </CardFooter>
          </Card>
        </view>
        <Separator />
        {/* Forms Section */}
        <view className="gap-4">
          <text className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Forms
          </text>
          <view className="bg-white rounded-lg p-4 border border-gray-200 gap-4">
            <view className="flex-row items-center justify-between">
              <view className="gap-1">
                <text className="text-sm font-medium text-gray-900">
                  Enable Notifications
                </text>
                <text className="text-xs text-gray-500">
                  Receive alerts on your device.
                </text>
              </view>
              <Switch />
            </view>
            <Separator />
            <view className="gap-2">
              <Checkbox label="I agree to the terms and conditions" />
              <Checkbox label="Subscribe to newsletter" checked={true} />
            </view>
          </view>
        </view>
        <Separator />
        {/* Accordion Section */}
        <view className="gap-4">
          <text className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Accordion
          </text>
          <view className="bg-white rounded-lg px-4 border border-gray-200">
            <Accordion title="Is it accessible?">
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion>
            <Accordion title="Is it styled?">
              Yes. It comes with default styles that matches the other
              components' aesthetic.
            </Accordion>
            <Accordion title="Is it animated?">
              Yes. It uses React state to toggle visibility with a clean
              transition.
            </Accordion>
          </view>
        </view>
        <view className="h-20" /> {/* Bottom Spacing */}
      </view>
    </scroll-view>
  );
}
