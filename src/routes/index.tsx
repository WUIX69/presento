import { Accordion } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

interface LandingPageProps {
  onNavigate?: (
    page: 'gallery' | 'sign-in' | 'sign-up' | 'student' | 'teacher',
  ) => void;
}

/**
 * Landing Page Component
 *
 * Displays the Lynx UI component showcase.
 * This will be the index route (/) when using a router.
 */
const LandingPage = ({ onNavigate }: LandingPageProps) => {
  return (
    <view className="p-6 gap-8">
      <view className="flex-row items-center justify-between mb-4">
        <view>
          <text className="text-3xl font-bold text-foreground">Violeta UI</text>
          <text className="text-muted-foreground mt-2">
            Shadcn-inspired reusable components for ReactLynx.
          </text>
        </view>
        <view className="flex-row gap-2 items-center">
          <ModeToggle />
          <Button variant="outline" onTap={() => onNavigate?.('sign-in')}>
            Auth Demo
          </Button>
        </view>
      </view>
      {/* Role Navigation Section */}
      <view className="gap-4 mb-4">
        <text className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Quick Access
        </text>
        <view className="flex-row gap-4">
          <view className="flex-1" bindtap={() => onNavigate?.('student')}>
            <Card>
              <CardContent className="p-6 items-center gap-3">
                <view className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/40">
                  <text className="text-4xl">🎓</text>
                </view>
                <text className="text-foreground font-bold text-lg">
                  Student
                </text>
                <text className="text-muted-foreground text-xs text-center">
                  Access student portal
                </text>
              </CardContent>
            </Card>
          </view>
          <view className="flex-1" bindtap={() => onNavigate?.('teacher')}>
            <Card>
              <CardContent className="p-6 items-center gap-3">
                <view className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/40">
                  <text className="text-4xl">👨‍🏫</text>
                </view>
                <text className="text-foreground font-bold text-lg">
                  Teacher
                </text>
                <text className="text-muted-foreground text-xs text-center">
                  Access teacher portal
                </text>
              </CardContent>
            </Card>
          </view>
        </view>
      </view>
      <Separator />
      {/* Buttons Section */}
      <view className="gap-4">
        <text className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
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
        <text className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
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
        <text className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
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
        <text className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
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
        <text className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Forms
        </text>
        <view className="bg-card rounded-lg p-4 border border-border gap-4">
          <view className="flex-row items-center justify-between">
            <view className="gap-1">
              <text className="text-sm font-medium text-foreground">
                Enable Notifications
              </text>
              <text className="text-xs text-muted-foreground">
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
        <text className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Accordion
        </text>
        <view className="bg-card rounded-lg px-4 border border-border">
          <Accordion title="Is it accessible?">
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion>
          <Accordion title="Is it styled?">
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </Accordion>
          <Accordion title="Is it animated?">
            Yes. It uses React state to toggle visibility with a clean
            transition.
          </Accordion>
        </view>
      </view>
      <view className="h-20" /> {/* Bottom Spacing */}
    </view>
  );
};

export default LandingPage;
